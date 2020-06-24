//
//  AnimatableLayer.swift
//  Aerial
//
//  Created by Guillaume Louel on 17/04/2020.
//  Copyright © 2020 Guillaume Louel. All rights reserved.
//

import Foundation
import AVKit

protocol AnimatableLayer: CALayer {
    var layerManager: LayerManager { get set }

    var lastCorner: Int { get set }
    var isPreview: Bool { get set }
    var baseLayer: CALayer { get set }
    var offsets: LayerOffsets { get set }
    var corner: InfoCorner { get set }

    var currentCorner: InfoCorner? { get set }
    var currentHeight: CGFloat? { get set }
    var currentPosition: CGPoint? { get set }

    // Lifecycle, can be overriden so this does NOT go into the extension
    func clear(player: AVPlayer)
    func setupForVideo(video: AerialVideo, player: AVPlayer)

    // Used by TextLayers only
    func setAlignment(mode: CATextLayerAlignmentMode)

    // Corner movement stuff
    func move(toCorner: InfoCorner, fullRedraw: Bool)
    func moveTo(point: CGPoint)

    // Margins
    func getHorizontalMargin() -> CGFloat
    func getVerticalMargin(forCorner: InfoCorner) -> CGFloat
}

extension AnimatableLayer {

    // MARK: Move layers
    // swiftlint:disable:next cyclomatic_complexity
    func move(toCorner: InfoCorner, fullRedraw: Bool) {
        if let currCorner = currentCorner, !fullRedraw {
            // Are we on the same corner ?
            if currCorner == toCorner {
                // And same height ?
                if currentHeight! == frame.height {
                    // position is reset, so we need to set it again
                    position = currentPosition!
                    return
                } else {
                    // It's a whole corner redraw, then
                    layerManager.redrawCorner(corner: toCorner)
                    return
                }
            } else {
                // So we changed corner... we redraw our previous corner
                // and redraw the new one too !
                let prevCorner = currCorner
                currentCorner = toCorner
                layerManager.redrawCorner(corner: prevCorner)
                layerManager.redrawCorner(corner: toCorner)
                return
            }
        }

        let mx = getHorizontalMargin()
        let my = getVerticalMargin(forCorner: toCorner)

        var newPos: CGPoint

        switch toCorner {
        case .topLeft:
            anchorPoint = CGPoint(x: 0, y: 1)
            newPos = CGPoint(x: mx, y: baseLayer.bounds.height - my)
            setAlignment(mode: .left)
        case .topCenter:
            anchorPoint = CGPoint(x: 0.5, y: 1)
            newPos = CGPoint(x: baseLayer.bounds.width/2,
                             y: baseLayer.bounds.height-my)
            setAlignment(mode: .center)
        case .topRight:
            anchorPoint = CGPoint(x: 1, y: 1)
            newPos = CGPoint(x: baseLayer.bounds.width-mx,
                             y: baseLayer.bounds.height-my)
            setAlignment(mode: .right)
        case .screenCenter:
            anchorPoint = CGPoint(x: 0.5, y: 0)
            newPos = CGPoint(x: baseLayer.bounds.width/2,
                             y: baseLayer.bounds.height/2 - my + 20)
            setAlignment(mode: .center)
        case .bottomLeft:
            anchorPoint = CGPoint(x: 0, y: 0)
            newPos = CGPoint(x: mx, y: my)
            setAlignment(mode: .left)
        case .bottomCenter:
            anchorPoint = CGPoint(x: 0.5, y: 0)
            newPos = CGPoint(x: baseLayer.bounds.width/2, y: my)
            setAlignment(mode: .center)
        case .absTopRight:
            anchorPoint = CGPoint(x: 1, y: 1)
            newPos = CGPoint(x: baseLayer.bounds.width-mx,
                             y: baseLayer.bounds.height-10)
            setAlignment(mode: .right)
        default:    // bottomRight
            anchorPoint = CGPoint(x: 1, y: 0)
            newPos = CGPoint(x: baseLayer.bounds.width-mx, y: my)
            setAlignment(mode: .right)
        }

        moveTo(point: newPos)

        let offset = offsets.corner[toCorner] == 0
            ? my + frame.height
            : frame.height

        // Make sure we update our offsets for the next layer
        offsets.corner[toCorner]! += offset

        // We need to save for next time !
        currentCorner = toCorner
        currentHeight = frame.height
        currentPosition = newPos
    }

    // Move in 1 second to a position
    // Those are masked by the transition between fades
    func moveTo(point: CGPoint) {
        CATransaction.begin()
        CATransaction.setValue(1, forKey: kCATransactionAnimationDuration)
        self.position = point
        CATransaction.commit()
    }

    // MARK: - Margins

    // Get the horizontal margin to the border of the screen
    func getHorizontalMargin() -> CGFloat {
        // We override for previews
        if isPreview {
            return 10
        }

        var mx: CGFloat = 50

        // We may override margins
        if PrefsInfo.overrideMargins {
            mx = CGFloat(PrefsInfo.marginX)
        }

        return mx
    }

    // Get the horizontal margin to the border of the screen
    func getVerticalMargin(forCorner: InfoCorner) -> CGFloat {
        // If we already have an offset, use that !
        if offsets.corner[forCorner] != 0 {
            return offsets.corner[forCorner]!
        }

        // We override for previews
        if isPreview {
            offsets.corner[forCorner] = 10
            return offsets.corner[forCorner]!
        }

        var my: CGFloat = 50

        // We may override margins
        if PrefsInfo.overrideMargins {
            my = CGFloat(PrefsInfo.marginY)
        }

        offsets.corner[forCorner] = my
        return my
    }

}

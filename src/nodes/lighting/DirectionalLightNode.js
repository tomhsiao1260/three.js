import AnalyticLightNode from './AnalyticLightNode.js';
import { lightTargetDirection } from './LightNode.js';
import { addLightNode } from './LightsNode.js';
import { addNodeClass } from '../core/Node.js';

import { DirectionalLight } from '../../lights/DirectionalLight.js';

class DirectionalLightNode extends AnalyticLightNode {

	constructor( light = null ) {

		super( light );

	}

	setup( builder ) {

		super.setup( builder );

		const lightingModel = builder.context.lightingModel;

		const lightColor = this.colorNode;
		const lightDirection = lightTargetDirection( this.light );
		const reflectedLight = builder.context.reflectedLight;

		lightingModel.direct( {
			lightDirection,
			lightColor,
			reflectedLight,
			shadowMask: this.shadowMaskNode
		}, builder.stack, builder );

	}

}

export default DirectionalLightNode;

addNodeClass( 'DirectionalLightNode', DirectionalLightNode );

addLightNode( DirectionalLight, DirectionalLightNode );

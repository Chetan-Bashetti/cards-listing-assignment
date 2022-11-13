import styled from 'styled-components';

const StyledText = styled.div`
	color: ${(props) => (props.color ? props.color : '')};
	font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
	text-transform: capitalize;
	margin: ${(props) => (props?.margin ? props.margin : '')};
	letter-spacing: 0.5px;
	text-transform: ${(props) => (props.transform ? props?.transform : '')};
	font-weight: ${(props) => (props.weight ? props?.weight : '')};
`;

const Typography = ({
	text = '',
	color = '',
	fontSize = '',
	margin = '',
	transform = '',
	weight = ''
}) => {
	return (
		<StyledText
			color={color}
			fontSize={fontSize}
			margin={margin}
			transform={transform}
			weight={weight}
		>
			{text}
		</StyledText>
	);
};

export default Typography;

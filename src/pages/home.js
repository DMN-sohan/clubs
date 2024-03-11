import React from "react";
import theme from "theme";
import { Theme, Image, Text, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const Home = () => {

	const render = sessionStorage.getItem("render");

	if(!render){
		window.location.href = "/loading";
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"home"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitScrollIndicator />
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-4">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Company
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--headline3"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 8px 6px 8px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
						<Override slot="link-home">
							Home
						</Override>
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-2">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				margin="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				display="flex"
				justify-content="center"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				width="75%"
			>
				<Box
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					hover-transform="translateY(-10px)"
					padding="0px 0px 65% 0px"
					width="100%"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
				>
					<Image
						position="absolute"
						display="block"
						right={0}
						min-height="100%"
						bottom={0}
						src="https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
						object-fit="cover"
						width="100%"
						top={0}
						left={0}
						srcSet="https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1553782481-ad5fe77656fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				lg-order="1"
				justify-content="space-between"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				display="flex"
				width="25%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
			>
				<Text
					margin="0px 0px 40px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					md-text-align="left"
				>
					The Road Ring is a national road in Iceland that runs around the island and connects most of the inhabited parts of the country. The total length of the road is 1,352 kilometres.
				</Text>
				<Box
					height="243px"
					overflow-x="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					width="243px"
					overflow-y="hidden"
					border-radius="100%"
				>
					<Image
						right={0}
						bottom={0}
						min-height="100%"
						src="https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80"
						object-fit="cover"
						width="100%"
						left={0}
						position="absolute"
						display="block"
						top={0}
						srcSet="https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1575908524891-b0bdd2b99f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" md-flex-direction="column" />
			<Text
				as="h1"
				margin="0px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				width="50%"
				md-width="100%"
				md-margin="0px 0px 16px 0px"
			>
				Notice Board
			</Text>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
			>
				<Image
					max-width="340px"
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23:20:31.207Z"
					md-margin="0px 0px 20px 0px"
					srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline2" md-margin="0px 0px 30px 0px">
					Letter from sir
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
			</Box>
		</Section>
		<Components.QuarklycommunityKitBackToTop />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65e8b817009abe001f04446e"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
};

export default Home;
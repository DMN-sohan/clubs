import React from "react";
import theme from "theme";
import { Theme, Image, Text, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";


const AboutUs = () => {

	const render = sessionStorage.getItem("render");

	if(!render){
		window.location.href = "/loading";
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
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
		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-8">
			<Text margin="0px 0px 0px 0px" color="--dark" text-align="center" font="600 48px --fontFamily-sans">
				Meet our leadership
			</Text>
			<Text
				text-align="center"
				color="--greyD2"
				font="300 20px/150% --fontFamily-sansHelvetica"
				padding="0px 180px 0px 180px"
				lg-padding="0px 0 0px 0"
			>
				We approach every project with a customer-centric mindset, seeking to understand our clients' needs and goals so that we can develop tailored solutions that meet their specific requirements.{" "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				lg-padding="0px 0 0px 0"
				lg-margin="50px 0px 0px 0px"
				lg-grid-gap="50px 0"
				sm-grid-template-columns="1fr"
				sm-grid-gap="40px 0"
				flex-direction="row"
				align-items="center"
				grid-gap="60px 40px"
				lg-grid-template-columns="1fr"
				lg-grid-template-rows="4fr"
				color="--darkL2"
			>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					display="flex"
					flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						width="40%"
						lg-width="30%"
						sm-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
							display="block"
							width="auto"
							border-radius="25px"
							lg-max-width="100%"
							lg-width="100%"
							height="280px"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						width="60%"
						padding="0px 0px 0px 35px"
						lg-width="70%"
						lg-padding="0px 0px 0px 25px"
						sm-width="100%"
						sm-padding="0 0 0 0"
					>
						<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" sm-margin="35px 0px 0px 0px">
							Michael Foster
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Co-Founder / CO
						</Text>
						<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2">
							Our visionary leader who has extensive experience in entrepreneurship and business development. Defines the strategic directions of the company's activities, identifying new opportunities for growth.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						width="40%"
						lg-width="30%"
						sm-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22:37:36.273Z"
							display="block"
							width="auto"
							border-radius="25px"
							sm-width="100%"
							lg-max-width="100%"
							lg-width="100%"
							height="280px"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						width="60%"
						padding="0px 0px 0px 35px"
						lg-width="70%"
						sm-width="100%"
						sm-padding="0 0 0 0"
					>
						<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" sm-margin="35px 0px 0px 0px">
							Floyd Miles
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Lead Developer
						</Text>
						<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2">
							Our lead developer responsible for overseeing the development of our solutions. They work closely with the design team to ensure that our solutions are both visually appealing and functional.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						width="40%"
						lg-width="30%"
						sm-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21:11:29.178Z"
							display="block"
							width="auto"
							border-radius="25px"
							sm-width="100%"
							lg-max-width="100%"
							lg-width="100%"
							height="280px"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						width="60%"
						padding="0px 0px 0px 35px"
						lg-width="70%"
						sm-width="100%"
						sm-padding="0 0 0 0"
					>
						<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" sm-margin="35px 0px 0px 0px">
							Emily Selman
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Sales Manager
						</Text>
						<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2">
							Our sales manager is a results-driven professional who is responsible for driving revenue growth through effective sales strategies and tactics.{" "}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						width="40%"
						lg-width="30%"
						sm-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
							display="block"
							width="auto"
							border-radius="25px"
							sm-width="100%"
							lg-max-width="100%"
							lg-width="100%"
							height="280px"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						width="60%"
						padding="0px 0px 0px 35px"
						lg-width="70%"
						lg-padding="0px 0px 0px 25px"
						sm-width="100%"
						sm-padding="0 0 0 0"
					>
						<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" sm-margin="35px 0px 0px 0px">
							Kristin Watson
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Marketing manager
						</Text>
						<Text margin="22px 0px 0px 0px" font="300 18px/140% --fontFamily-sansHelvetica" color="--darkL2">
							Our marketing manager is a creative thinker who is responsible for developing and implementing marketing strategies that drive brand awareness and customer acquisition.
						</Text>
					</Box>
				</Box>
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

export default AboutUs;
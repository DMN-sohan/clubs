import React from "react";
import theme from "theme";

import { Theme, Image, Text, LinkBox, Box, Section, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

import { getSessionStorage } from "util/SessionStorage";
import { downloadable } from "util/downloadable";
import { JSONtoXLSX } from "util/JSONtoXLSX";

import { saveAs } from 'file-saver';

const Clubs = ({ keyProp }) => {

	const render = sessionStorage.getItem("render");

	if(!render){
		window.location.href = "/loading";
	}

	const data = getSessionStorage(keyProp);
	console.log(JSON.stringify(data));

	const handleDownload = () => {
		saveAs(JSONtoXLSX(data), data.Name + " Club Details.xlsx");
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"clubs"} />
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

		{/* Dynamic Section */}

		<Components.QuarklycommunityKitCarousel
			autoPlay
			autoPlayIntervalProp="5s"
			showHead={false}
			showLink={false}
			showText={false}
			slidesProp={data.Gallery.length}
		>
			{data.Gallery.map((imageURL, index) => ([
				<Override slot={"Slide Image " + index} src={imageURL} />,
			]))}
		</Components.QuarklycommunityKitCarousel>






		{/* Dynamic Section */}

		{data.Videos.map((videoUrl, index) => (
			<Components.QuarklycommunityKitYouTube key={index} url={videoUrl} />
		))}

		{/* Dynamic Section */}

		<Section padding="80px 0 80px 0" background="#EDF2F6" sm-padding="60px 0 60px 0" quarkly-title="Schedule-8">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="48px 30px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="30px"
				md-grid-gap="32px"
			/>
			<Box
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				align-items="center"
				display="flex"
				grid-column="1 / span 3"
				lg-grid-column="auto / auto"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Events
				</Text>
			</Box>

			{data.Events.event.map((event, index) => (
				<Box padding="40px 40px 40px 40px" lg-padding="45px 30px" md-padding="45px 45px" background="#FFFFFF" border-radius="24px" justify-content="flex-start" flex-direction="column" display="flex">
					<Box key={index} margin="0px 0px 24px 0px">
						<Text margin="0px 0px 16px 0px" color="--darkL2" font="--lead" lg-text-align="left">
							{event.time}
						</Text>
						<Text margin="0px 0px 14px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							{event.title}
						</Text>
						<Text margin="0px 0px 46px 0px" color="--greyD3" font="--base" lg-text-align="left" flex="1 0 auto">
							{event.description}
						</Text>
						<Image
							src={event.imageURL}
							display="block"
							border-radius="16px"
							max-height="400px"
							align-self="center"
							max-width="300px"
						/>
					</Box>
				</Box>
			))}

		</Section>

		{/* Dynamic Section */}

		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-12">
			<Text margin="0px 0px 0px 0px" color="--dark" font="600 48px --fontFamily-sans">
				Letter from our Team
			</Text>
			<Text
				text-align="left"
				color="--greyD2"
				font="300 22px --fontFamily-sansHelvetica"
				margin="16px 600px 16px 0px"
				lg-margin="16px 0 16px 0px"
				height="auto"
				display="block"
				width="inherit"
				order="0"
				flex="0 1 auto"
			>
				{data['Letter from Team']}{"  "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				flex-direction="column"
				lg-width="100%"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="46px 24px"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
				sm-grid-gap="36px 0"
				margin="50px 0px 0px 0px"
				lg-grid-template-columns="repeat(2, 1fr)"
				lg-grid-template-rows="auto"
			>
				{data.Head.members.map((member, index) => (
								<Box
									min-width="100px"
									min-height="100px"
									justify-self="center"
									sm-display="flex"
									sm-flex-direction="column"
									sm-align-items="center"
									display="flex"
									flex-direction="column"
								>
									<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
										<Image
											src={member["image url"]}
											display="block"
											width="100%"
											border-radius="25px"
											lg-max-width="100%"
											max-width="100%"
											object-fit="cover"
											max-height="100%"
											md-height="250px"
											md-width="auto"
											sm-width="100%"
											sm-height="auto"
											height="250px"
											srcSet={`${member["image url"]}?w=500 500w, ${member["image url"]}?w=800 800w, ${member["image url"]}?w=1080 1080w, ${member["image url"]}?w=1600 1600w, ${member["image url"]}?w=2000 2000w, ${member["image url"]}?w=2600 2600w, ${member["image url"]}?w=3200 3200w`}
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
										/>
									</Box>
									<Box
										min-width="100px"
										min-height="100px"
										display="flex"
										flex-direction="column"
										justify-content="center"
										sm-width="100%"
										sm-padding="0px 0px 0px 0"
										margin="25px 0px 0px 0px"
									>
										<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
											{member.name}
										</Text>
										<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
											{member.post}
										</Text>
										<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
											{member["roll number"]}
										</Text>
									</Box>
								</Box>
				))}
			</Box>
		</Section>

		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Members
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center" />
			<Button font="--lead" margin="20px" onClick={handleDownload}>
				Download List
			</Button>
		</Section>
		<Components.QuarklycommunityKitBackToTop />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65e8b817009abe001f04446e"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
};

export default Clubs;
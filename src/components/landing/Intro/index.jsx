import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button, Status } from 'components/common'
import dev from 'assets/illustrations/Title.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hey!</h1>
				<h4>I’m Nathan and I’m a Backend & Devops engineer!</h4>
        <Status />
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Nathan and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)

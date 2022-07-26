import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Home() {
	const history = useHistory();
	const buttonClicked = () => {
		history.push(ROUTES.SIGN_UP);
	};
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time.
					</Feature.SubTitle>
					<OptForm.Text>
						Ready to watch? Enter your email to create or restart your
						membership.
					</OptForm.Text>
					<OptForm>
						<OptForm.Input placeholder="Email address" />
						<OptForm.Button onClick={() => buttonClicked()}>Get Started
						</OptForm.Button>
						<OptForm.Break />
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}

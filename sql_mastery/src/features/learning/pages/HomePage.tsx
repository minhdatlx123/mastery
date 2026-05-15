import { HomePageView } from '../components/HomePageView';
import { useHomePageLogic } from '../hooks/useHomePageLogic';

const HomePage: React.FC = () => {
  const homePageState = useHomePageLogic();
  return <HomePageView {...homePageState} />;
};

export default HomePage;


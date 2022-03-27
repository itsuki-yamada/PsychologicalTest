import HomePage from 'components/layout/HomePage';
import { getAllTestHeaders } from 'lib/psychologicalTest';

export const getStaticProps = async (context) => {
  // sample心理テストデータ読み込み
  const testHeaders = getAllTestHeaders();
  return {
    props: { testHeaders },
  };
};

const Index = ({ testHeaders, router }) => {
  console.log(testHeaders);
  return <HomePage router></HomePage>;
};

export default Index;

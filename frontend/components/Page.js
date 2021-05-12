import Header from './Header';
import PageStyles from './styles/PageStyles';

export default function Page({ children }) {
    return (
      <PageStyles>
        <Header />
        <h2>I am the page component</h2>
        {children}
      </PageStyles>
    );
  }
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen((request, type) => {
      if (type === 'POP') {
        setTimeout(() => {
          window.scrollTo(0, window.scrollY + 1);
        }, 16 + 1);
        return;
      }
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollTop);
import React from 'react';

import styles from '../styles/index.module.scss';

const Index = ({ star }) => {
  return (
    <div className={styles.main}>
      Hello
    </div>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:4000");
//   const star = await res.json();

//   return {
//     props: { star }
//   }
// }

export default Index;
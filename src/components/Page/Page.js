import React, { useState } from 'react';
import ExpandableContent from '../ExpandableContent/ExpandableContent';

import styles from './Page.module.css';

const Page = (props) => {
  const [selectedSection, setSelectedSection] = useState(0);
  const {isMobile}=props;

  if (isMobile) {
    return (
      <div className={styles.MobilePage} >
        <ExpandableContent title='Mountain 1'>
          <div className={styles.selectedContent}>
              <img className={styles.card} src="/images/lam-tab-1-schedule.png" alt="details card" />
              <img className={styles.Background} src="/images/lam-tab-1.png" alt="Background" />
          </div>
        </ExpandableContent>
        <ExpandableContent title='Mountain 2'>
          <div className={styles.selectedContent}>
            <img className={styles.card} src="/images/lam-tab-2-schedule.png" alt="details card" />
            <img className={styles.Background} src="/images/lam-tab-2.png" alt="Background" />
          </div>
        </ExpandableContent>
      </div>
    );
  }

  return (
    <section className={styles.Page} >
      <div className={styles.SelectBar}>
        <button
          onClick={() => setSelectedSection(0)}
          className={selectedSection === 0 ? styles.selectedSection : ''}
        >
          Mountain 1
        </button>
        <button
          onClick={() => setSelectedSection(1)}
          className={selectedSection === 1 ? styles.selectedSection : ''}
        >
          Mountain 2
        </button>
      </div>

      {selectedSection ?
        (<div className={styles.selectedContent}>
          <img className={styles.card} src="/images/lam-tab-1-schedule.png" alt="details card" />
          <img className={styles.Background} src="/images/lam-tab-1.png" alt="Background" />
        </div>)

        :
        (<div className={styles.selectedContent}>
          <img className={styles.card} src="/images/lam-tab-2-schedule.png" alt="details card" />
          <img className={styles.Background} src="/images/lam-tab-2.png" alt="Background" />
        </div>)
      }

    </section>
  );
}

export default Page;
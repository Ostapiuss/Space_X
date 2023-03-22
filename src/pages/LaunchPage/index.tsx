import { useEffect, useState } from "react";

import Launches from "../../components/Launches";

import { getLaunches } from "../../api/space-api";

import { LaunchDocsDataInterface } from "../../interfaces/launch-interface";

import './style.scss';

const LaunchPage = () => {
  const [spaceXData, setSpaceXData] = useState<Array<LaunchDocsDataInterface>>([]);
  const [page, setPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    getLaunches(page).then(res => {
      setSpaceXData([...spaceXData, ...res]);
      setPage(page + 1);
      setFetching(false);
    });
    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const scrollHandler = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollHeight - (scrollTop + innerHeight) < 200) {
      setFetching(true);
    }
  }


  return (
    <section className="launch-page">
      {
        spaceXData && (
          <Launches launchesData={spaceXData} />
        )
      }
    </section>
  )
}

export default LaunchPage;

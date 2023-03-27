import React, { useCallback, useEffect, useState } from "react";

import LaunchCard from "../LaunchCard";
import Filter from "../Filter";

import { LaunchDocsDataInterface } from "../../interfaces/launch-interface";
import { FilterSchema, LaunchFilterFields } from "../../interfaces/filter-interface";

import { getLaunches, getFilterLaunches } from "../../api/space-api";

import { FIELD_TYPES } from "../../constants/fields";

import './style.scss';

const FILTER_FIELDS: Array<LaunchFilterFields> = [
  { fieldName: 'rocketName', value: '', placeholder: 'Rocket Name', fieldType: FIELD_TYPES.textField },
  { fieldName: 'isSuccess', value: false, fieldType: FIELD_TYPES.switchField },
]

const Launches: React.FC<any> = () => {
  const [spaceXData, setSpaceXData] = useState<Array<LaunchDocsDataInterface>>([]);
  const [filterData, setFilterData] = useState<Array<FilterSchema> | null>(null);
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
    if (filterData) {
      setSpaceXData([]);
      window.removeEventListener('scroll', scrollHandler);
      getFilterLaunches(filterData).then(res => {
        setSpaceXData([...spaceXData, ...res]);
      })
    }
    // eslint-disable-next-line
  }, [filterData])

  const scrollHandler = useCallback((e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollHeight - (scrollTop + innerHeight) < 200) {
      setFetching(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
    // eslint-disable-next-line
  }, []);

  const resetFilters = () => {
    setFilterData(null);
    setSpaceXData([]);
    setPage(1);
    setFetching(true);
    window.addEventListener('scroll', scrollHandler);
  }

  return (
    <div className="launches">
      <h2 className="launches-title">Launches</h2>

      <Filter
        fields={FILTER_FIELDS}
        className="launches-filter"
        setSpaceXData={setSpaceXData}
        setFilterData={setFilterData}
        resetFilters={resetFilters}
        filterData={filterData}
      />

      <div className="launches-cards">
        {
          spaceXData.map((launchData) => {
            return <LaunchCard launchCardData={launchData} key={launchData.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Launches;

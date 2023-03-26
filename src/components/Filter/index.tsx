import React, {ChangeEvent, useEffect, useState} from "react";

import cn from "classnames";

import Button from "../../shared/components/Button";
import Switcher from "../../shared/components/Switcher";

import { LaunchFilterFields } from "../../interfaces/filter-interface";

import { FIELD_TYPES } from "../../constants/fields";

import { styled } from "@stitches/react";

import './style.scss';
import {LaunchInterface} from "../../interfaces/launch-interface";

const TextField = styled("input", {
  padding: '10px 20px',
  border: '1px solid transparent',

  '&:active': {
    border: '1px solid #1976d2'
  }
});

interface FilterInterface {
  fields: Array<LaunchFilterFields | any>,
  className?: string,
  setSpaceXData: () => Array<LaunchInterface>,
  setFilterData: () => void,
  resetFilters: () => void,
  filterData: () => void,
}

const Filter: React.FC<FilterInterface> = ({
   fields,
   className,
   setSpaceXData,
   setFilterData,
   resetFilters,
   filterData
}) => {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    initializeForm();
    // eslint-disable-next-line
  }, []);

  const initializeForm = (): void => {
    if (fields) {
      fields.forEach((field) => {
        setFormData({
          [field.fieldName]: null,
        })
      })
    }
  }

  const createFilters = (formArray) => {
    const filterArray = [];

    formArray.forEach((el) => {
      filterArray.push({ filterBy: el[0], filterValue: el[1] })
    });

    return filterArray;
  }

  const onSubmit = (submitEvent: SubmitEvent) => {
    submitEvent.preventDefault();
    setSpaceXData([]);

    setFilterData(createFilters(Object.entries(formData)));
  }

  const onReset = (): void => {
    resetFilters();
    initializeForm();
  }

  const onChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = changeEvent.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form className={cn('filter', className)} onSubmit={onSubmit}>
      <div className="filter-fields">
        {
          fields && formData && (
            fields.map((field) => {
              return (
                <React.Fragment key={field.fieldName}>
                  {
                    field.fieldType === FIELD_TYPES.textField && (
                      <TextField
                        name={field.fieldName}
                        value={formData[field.fieldName] ?? ''}
                        placeholder={field.placeholder}
                        onChange={onChange}
                      />
                    )
                  }
                  {
                    field.fieldType === FIELD_TYPES.switchField && (
                      <div className={`switch ${field.fieldName}`}>
                        <h3>Is Success Launch</h3>
                        <Switcher
                          name={field.fieldName}
                          value={formData[field.fieldName] ?? false}
                          onChange={onChange}
                        />
                      </div>
                    )
                  }
                </React.Fragment>
              )
            })
          )
        }
      </div>
      {
        <>
          <Button type="submit" text="Submit" className="filter-submit" />
          {
            filterData && (
              <Button type="button" onClick={onReset} text="Reset" className="filter-reset" />
            )
          }
        </>
      }
    </form>
  )
}

export default Filter;

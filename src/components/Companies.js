import React from 'react'
import Company from '../Company/company'
import Companydata from '../data/companiesData'
import CompanyCard from './companyCard'

const Companies = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container py-2">
          <div class="flex flex-wrap -m-4">
            {
              Companydata.map((i) => {
                return (
                  <CompanyCard {...i} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>

  )
}
export default Companies
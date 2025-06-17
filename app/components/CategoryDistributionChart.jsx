import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

const CategoryDistributionChart = () => {
  return (
    <div className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl
    p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'>
        <h2 className='text-base md-text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
            CategoryDistributionChart
        </h2>

        <div className='h-64 md:h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie 
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      dataKey="value"
                    >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CategoryDistributionChart
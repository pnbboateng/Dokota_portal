import React from 'react'
import Trend from "@/components/Trend";
import Piechart from "@/components/Piechart";

const Dashboardcontent = () => {
  return (
    <div>
      <>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-4">
                <div>
                  <Trend />
                </div>
                <div>
                  <Piechart />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-x-6 gap-y-6 p-4">
                <div>{/* More content here */}</div>
              </div>
            </>
          
    </div>
  )
}

export default Dashboardcontent

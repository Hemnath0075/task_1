import React from 'react'

function Description() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center gap-12 text-white mt-12">
        <p className="text-3xl font-[600]">Hello v/s Hello</p>
        <div className="flex flex-col justify-center items-start w-[80%] gap-12">
          <div className="basis-[80%] flex flex-row gap-4 text-2xl">
            {/* <img src={selectedOption.imageUrl} alt={selectedOption.label} /> */}
            <span>{"text"} Overview</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-row justify-center items-center gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
                Supermetrics strives to fulfill the same promise. However,
                Supermetrics specializes in marketers' needs precisely.
                Supermetrics helps extract data from 100+ marketing platforms
                into reporting, analytics, and data storage tools that marketers
                know and love.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
                Supermetrics gives instant access to your data through
                destinations like Google Sheets, Excel, Google Data Studio,
                BigQuery, Snowflake, Amazon Redshift, and many others.
              </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
                Since the objective for both solutions is similar, there are
                significant differences between the two. In this article, we
                will discuss how both platforms compare in these areas -
                <ol className="mt-8 list-decimal ml-4">
                  <li>Data Connectors</li>
                  <li>Data Destinations</li>
                  <li>Reporting</li>
                  <li>Security & Reliability</li>
                  <li>Reporting</li>
                  <li>Pricing</li>
                  <li>Support</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[80%] gap-12">
          <div className="basis-[80%] flex flex-row gap-4 text-2xl">
            <img src={"/Comparison/star.svg"} alt={"star"} />
            <span>Data Source Connectors</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
            <div className="flex flex-row justify-center items-start gap-4 w-full">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg w-full">
                When we talk about Data Connectors, the two questions that pop
                into our mind are -
                <ul className="mt-8 list-disc ml-4">
                  <li>What platforms can we extract data from ?</li>
                  <li>What data can we extract from the sources ?</li>
                </ul>
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-4 w-full">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
                What platforms can we extract data from? <br />
                Supermetrics offers 100+ marketing data source connectors,
                whereas Vision Vault offers 25+ connectors. 
              </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
              The connectors provided by Vision Vault include - GA4, Google Ads, Facebook Ads, Facebook Insights, LinkedIn Ads, X Ads, and a lot more. <span className="font-[200]"> You can find the complete list of connectors here - Integration Page Link.</span>
              </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
              You may feel that the number of connectors Vision Vault provides is lower than Supermetrics; however, that doesn’t undermine our offerings. We offer the most common data sources in the market, and on top of that, we can build connectors based on our client's requirements, an option that Supermetrics doesn’t provide. You can’t request any additional connectors besides those mentioned on their website.
              </p>
            </div>
            <div className="flex flex-row justify-start items-start gap-4 w-full">
              <p className="text-lg font-[200] text-start">
              Can’t find a connector you’re looking for? Let us know, and we will build it for you: Form Link.
              </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
              What data can we extract from the sources? <br /> This defines the type and quality of data you can extract from each source. Vision Vault and Supermetrics provide all the metrics and dimensions that can be extracted using the platform’s API.  
              </p>
            </div>
            <div className="flex flex-row justify-center items-start gap-4">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg">
              Additionally, Vision Vault allows you to choose the metrics and dimensions to extract per your requirements. This helps you to - save cost and not overburden yourself with the data that you don’t require.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[80%] gap-12">
          <div className="basis-[80%] flex flex-row gap-4 text-2xl">
            <img src={"/Comparison/star.svg"} alt={"star"} />
            <span>Destination</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
            <div className="flex flex-row justify-center items-start gap-4 w-full">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg w-full">
              Where can you move your data? <br/> 
Well Supermetrics allows you to move your data to spreadsheets, data warehouses, and BI tools. Vision Vault, on the other hand, provides you with the same offerings and can help you store your data in a spreadsheet or your choice of database, but we prefer not to connect directly to a BI tool because -
                <ul className="mt-8 list-decimal ml-4">
                  <li>Limited data transformation</li>
                  <li>Inadequate backup and recovery</li>
                  <li>Complex query limitation.</li>
                </ul>
              </p>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Description
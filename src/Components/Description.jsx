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
              Where can you move your data? <br />
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
      <div className="flex flex-col justify-center items-start w-[80%] gap-12">
        <div className="basis-[80%] flex flex-row gap-4 text-2xl">
          <img src={"/Comparison/star.svg"} alt={"star"} />
          <span>Reporting</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              As we have seen above, with Supermetrics, you can move your data to a BI tool such as Google Looker Studio (formerly Data Studio), Tableau, Power BI, or Qlik. However, you will have to invest in additional resources to visualize your data by hiring someone.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              With Vision Vault, we provide fully customized dashboards based on your needs to highlight the insights that you want. We can help you build dashboards on Tableau and Google Looker Studio based on your requirements. Here’s a detailed comparison between them: Link to comparison doc of BI tools.
            </p>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[80%] gap-12">
        <div className="basis-[80%] flex flex-row gap-4 text-2xl">
          <img src={"/Comparison/star.svg"} alt={"star"} />
          <span>Security and Reliability</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              As per Supermetrics website, they claim that they don’t store their data in their servers and transfer data securely from data source to destination. On the other hand, we guarantee that Vision Vault is 100% secure and private. Vision Vault exists and operates entirely on your cloud. This means that your data NEVER leaves your cloud and cannot be accessed by any third party. Each Vision Vault setup comes with a 6 months warranty.             </p>
          </div>
        </div>


      </div>
      <div className="flex flex-col justify-center items-start w-[80%] gap-12">
        <div className="basis-[80%] flex flex-row gap-4 text-2xl">
          <img src={"/Comparison/star.svg"} alt={"star"} />
          <span>Pricing</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              The pricing of Supermetrics is based on the number of data sources, accounts, and users. Their pricing category is divided into four segments - Essential, Core, Super, and Enterprise. However, you need only one connector under the Super segment.             </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              In that case, you will have to pay USD 579 per month (for Google Sheets), which we believe is way too much for a single connector (or similar cases where you need five connectors from the Core segment and one connector from Super segment, you still need to pay the price according to the Super Segment). Also, this is a recurring payment, and you will need to pay every month till you use their service.             </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <div className="flex flex-row justify-center items-start gap-4 w-full">
            <img src="/Comparison/tick_compare.svg" alt="" />
            <p className="text-lg w-full">
              On the other hand, we charge a one-time setup fee based on the destination and volume of data (no annual or monthly subscription). And we can guarantee that you will have over 50% cost savings over a three-year period.              </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-4 w-full">
          <p className="text-lg font-[200] text-start">
            Want to know more? Schedule a call NOW!
          </p>
        </div>
        <div className="flex flex-col justify-center items-start w-[80%] gap-12">
          <div className="basis-[80%] flex flex-row gap-4 text-2xl">
            <img src={"/Comparison/star.svg"} alt={"star"} />
            <span>Support</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
            <div className="flex flex-row justify-center items-start gap-4 w-full">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg w-full">
                Supermetrics offers support through a forum equipped with written articles to assist users in resolving their queries independently. Additionally, Supermetrics provides a ticket system where users can submit their inquiries, and a dedicated assistant will promptly respond to the user's email to address their specific needs.             </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
            <div className="flex flex-row justify-center items-start gap-4 w-full">
              <img src="/Comparison/tick_compare.svg" alt="" />
              <p className="text-lg w-full">
                On the other hand, We will assign a dedicated Project Lead who will be there to help you with your queries anytime. You can chat, email, or set up a meeting, whichever works for you better.             </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[80%] gap-12">
            <div className="basis-[80%] flex flex-row gap-4 text-2xl">
              <img src={"/Comparison/star.svg"} alt={"star"} />
              <span>Summary</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
              <div className="flex flex-row justify-center items-start gap-4 w-full">
                <img src="/Comparison/tick_compare.svg" alt="" />
                <p className="text-lg w-full">
                  Hopefully, this comparison clarifies some of your doubts. There are multiple aspects to consider, and the right choice depends on your specific requirements. We can set up a call with our team, and we can discuss your requirements and offer you the best solution to your needs.             </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>

  )
}

export default Description
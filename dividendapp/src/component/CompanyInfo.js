import React from "react";

const CompanyInfo = ({ data }) => {
  const reducer = (prev, current) => prev + current;

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div>
            <h1>{item.share}</h1>
            <p>Company: {item.company}</p>
            <p>Price: {item.price}</p>
            <p>Last year dividend: {item.dividendHistory[0].dividend}</p>
            <p>
              Dividend yield %:{" "}
              {((item.dividendHistory[0].dividend / item.price) * 100).toFixed(
                1
              )}
            </p>
            <p>
              5 year dividend yield is:{" "}
              {item.dividendHistory.reduce(reducer) / 5} / {item.price}
            </p>

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyInfo;

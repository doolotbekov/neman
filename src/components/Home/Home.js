import React from 'react';


const Home = ({name}) => {
      // const {product}=name
  // const item=  name.map((item)=> {
  //     console.log(item.product)
  //
  //   })
    const n = name;
    return (
        <div>
            {/*{innerArray.map((item) => (*/}
            {/*    <div key={item.product_id}>{item.product}</div>*/}
            {/*))}*/}
            {/*<img src={name.main_pair.detailed.image_path} alt=""/>*/}
            {
               n.map(el=> (
                            <div className="mb-8" >
                                {/*{el.product}*/}
                            </div>
                        )
                )
            }

        {/*<div className="mb-8" >{price}</div>*/}
        </div>
    );
};

export default Home;
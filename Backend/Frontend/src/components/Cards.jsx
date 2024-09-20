import React from 'react'

function Cards({data}) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-300">
                <figure>
                    <img
                        src={data.imageUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">{data.category}</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${data.price}</div>
                        <div className="badge badge-outline">Buy Now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
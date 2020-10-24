import React from 'react';
import { Link } from 'react-router-dom';

import './CatList.css';

const CatList = ({ cats }) => {
    return (
        <div className="CatList">
            <h1 className="display-1 text-center">Cat List!</h1>
            <div className="row">
                {cats.map((cat) => (
                    <div
                        key={cat.name}
                        className="Cat-box col-md-4 text-center"
                    >
                        <img src={cat.src} alt={cat.name} />
                        <h3>
                            <Link
                                className="underline"
                                to={`/cats/${cat.name}`}
                            >
                                {cat.name}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatList;

import React from 'react';
import { Link } from 'react-router-dom';

import './Cat.css';

const Cat = ({ cat }) => {
    return (
        <div className="Cat row justify-content-center mt-4">
            <div className="col-11 col-lg-5">
                <div className="card Cat-card">
                    <img
                        className="card-img-top"
                        src={cat.src}
                        alt={cat.name}
                    />
                    <div className="card-body">
                        <h2 className="card-title">{cat.name}</h2>
                        <h4 className="card-subtitle text-muted">
                            {cat.age} years old
                        </h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {cat.facts.map((fact, index) => (
                            <li key={index} className="list-group-item">
                                {fact}
                            </li>
                        ))}
                    </ul>
                    <div className="card-body">
                        <Link className="btn btn-info" to="/">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cat;

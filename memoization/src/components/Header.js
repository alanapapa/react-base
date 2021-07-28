import React from 'react';

const Header = ({data, clicker}) => {
    console.log('Header component rerendered')
    return (
        <div>
            Header - { data.number }
            <br/><br/>
            <button onClick={clicker}>Click</button>
            <code>{JSON.stringify(data)}</code>
        </div>
    );
};

export default React.memo(Header);
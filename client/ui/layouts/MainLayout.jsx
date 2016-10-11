import React from 'react';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2>Website</h2>
            <nav>

            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>

);
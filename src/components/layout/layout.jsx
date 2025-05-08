import React from 'react'

const layout = () => {
  return (
    <div>
        <header />
        <main>
            <Outlet/>
        </main>
        <footer/>
    </div>
)
}

export default layout
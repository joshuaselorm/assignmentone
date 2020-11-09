import React from 'react'

function Forms() {
    return (
        <div>
            <h2>HTML Forms</h2>

            <form >
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John"/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe"/>
            <input type="submit" value="Submit"/>
            </form> 

        </div>
    )
}

export default Forms

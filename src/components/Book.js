import React,{Component} from "react";


const Book = props =>{
    return(
        <div>
            <h2>Book: {props.bookName}</h2>
            <h2>Writter: {props.writter}</h2>
        </div>
    );
}

export default Book;
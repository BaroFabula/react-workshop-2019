import React, { Component, Fragment } from 'react';

export function BookListItem({book}){
    const {title} = book;
     return (<span>{title}</span>);

}

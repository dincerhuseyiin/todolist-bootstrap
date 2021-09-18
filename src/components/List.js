import React from 'react'

import {  ListGroup, Button } from "react-bootstrap";


const List = ({ list, setList }) => {
    const handleDelete = ({id}) => {
        setList(list.filter((t) => t.id !== id))
    }

    const handleToggle = (t) => {
        setList(
            list.map((item) => {
                if (item.id === t.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    }

    return (
        <div>
            <ListGroup>
                {list.map((t) => (
                    <ListGroup.Item variant={t.completed? "success" : "danger"} key={t.id}>
                        {t.value} <Button size="sm" variant="danger"onClick={() => handleDelete(t)}>Delete</Button>
                        <Button position="rigt" size="sm"variant="success" onClick={() => handleToggle(t)}> Checked </Button>
                    </ListGroup.Item >
                ))}
            </ListGroup>
        </div>
    )
}

export default List

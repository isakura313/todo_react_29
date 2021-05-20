import { Component } from 'react'
import './index.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const containterStyles = {
    marginTop: "10px"
}

class TodoItem extends Component {
    createTasks = item => {
        return (
            <div className="TodoList" key={item.key}>
                <Box
                    bgcolor="primary.main"
                    color="primary.contrastText"
                    p={2}
                    m={2}
                >
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                    >
                        <div> {item.text} </div>
                        <Button variant="contained" color="secondary"
                            onClick={() => this.props.deleteItem(item.key)}>
                            Done </Button>
                    </Grid>
                </Box >
            </div>
        )
    }
    render() {
        const listEn = this.props.entries // массив ключ - значений
        const ListItems = listEn.map(this.createTasks) // метод 
        return <Container maxWidth="sm" style={containterStyles}> {ListItems} </Container>
    }
}
export default TodoItem
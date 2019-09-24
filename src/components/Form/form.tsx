import React from 'react';
import { Input } from '@fcc/rbo-ui/dist/Input';
import { Button } from '@fcc/rbo-ui/dist/Button';
import { Root, Wrap, Label } from './form.styles';
import { Checkbox } from '@fcc/rbo-ui/dist/Checkbox';
import { Col, Grid } from '../common/grids';

interface State {
    checked: boolean;
}

class Form extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { checked: false };
    }
    render() {
        return (
            <Root>
                <Grid size='3'>
                    <Col>
                        <Label>Имя
                            <Input placeholder='Введите имя' />
                        </Label>
                    </Col>
                    <Col>
                        <Label>Фамилия
                            <Input placeholder='Введите фамилию' />
                        </Label>
                    </Col>
                    <Col>
                        <Label>Отчество
                            <Input placeholder='Введите отчество' />
                        </Label>
                    </Col>
                    <Col>
                        <Label>Дата рождения
                            <Input placeholder='Дата рождения' />
                        </Label>
                    </Col>
                    <Col>
                        <Label>Сумма займа
                            <Input placeholder='Сумма займа' />
                        </Label>
                    </Col>
                    <Col>
                        <Label>Срок кредитования
                            <Input placeholder='Срок кредитования' />
                        </Label>
                    </Col>

                </Grid>
                <Wrap>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    >
                        Согласен со всем и на всё
                    </Checkbox>
                </Wrap>
                <Grid size='1'>
                    <Col>
                        <Button size='l' design='accent' type='submit' onClick={this.handleClick}>Нажми на меня</Button>
                        <Button size='l' design='accent' disabled>Неактивная кнопка</Button>
                    </Col>
                </Grid>
            </Root>

        );
    }
    handleChange = (e, payload) => {
        this.setState({ checked: payload.value });
    }
    handleClick() {
        window.alert('Button is Clicked!');
    }
}

export default Form;

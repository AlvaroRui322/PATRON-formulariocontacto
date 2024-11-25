import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    message: Yup.string().required('Mensaje requerido'),
});

const FormularioContacto = () => {
    const handleSubmit = (values) => {
        console.log(values);  // Aquí puedes hacer algo con los valores, como enviarlos a un servidor
        alert("Formulario enviado");
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" gutterBottom>
                Contacto
            </Typography>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="name"
                            label="Nombre"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />

                        <Field
                            as={TextField}
                            name="message"
                            label="Mensaje"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.message && Boolean(errors.message)}
                            helperText={touched.message && errors.message}
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Enviar
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

function App() {
    return (
        <div>
            <FormularioContacto />
        </div>
    );
}

export default App;

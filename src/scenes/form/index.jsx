import { Box, Button, useTheme, TextField } from '@mui/material';
import { tokens } from '../../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const handleFormSubmit = (values) => {
    console.log(values);
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
});

const Form = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    return (
        <Box m="20px">
            <Header title="FORM" subtitle="Form to create new user" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    address: '',
                    city: '',
                }}
                validationSchema={validationSchema}
            >
                {({ 
                    values, 
                    errors, 
                    touched, 
                    handleChange, 
                    handleBlur, 
                    handleSubmit, 
                    isSubmitting 
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            marginTop={3}
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { 
                                    gridColumn: isNonMobile ? undefined : "span 4", 
                                    marginBottom: "20px"
                                },
                                "& .MuiInputBase-root": {
                                    backgroundColor: colors.grey[800],
                                    color: colors.text,
                                },
                            }}
                        >
                            <TextField
                                id="name"
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                id="phone"
                                label="Phone"
                                name="phone"
                                variant="outlined"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.phone && Boolean(errors.phone)}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                id="address"
                                label="Address"
                                name='address'
                                variant="outlined"
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.address && Boolean(errors.address)}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                id="city"
                                label="City"
                                name="city"
                                variant="outlined"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.city && Boolean(errors.city)}
                                helperText={touched.city && errors.city}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                width="100%"
                                gridColumn="span 4"
                                sx={{
                                    marginTop: "20px", 
                                    "& > button:hover": {
                                        backgroundColor: colors.greenAccent[700],
                                        color: colors.grey[100]
                                    }
                                 }}
                            >
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    sx={{
                                        height: "40px",
                                        width: "200px",
                                        backgroundColor: colors.greenAccent[500],
                                        color: colors.grey[800],
                                    }}
                                >
                                    Create new user
                                </Button>
                            </Box>

                        </Box>
                    </form>
                )}
            </Formik>

        </Box>
    )
}

export default Form;

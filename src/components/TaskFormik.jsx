import React from 'react';
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const taskSchema = Yup.object().shape(
	{
		name: Yup.string().required('Name is required'),
		description: Yup.string().required('Description is required'),
	}
)

const TaskFormik = () => {

	const initialTask = new Task('', '', false, LEVELS.NORMAL)

	return (
		<div>
			<h4>Add Tasks with Formik</h4>
			<Formik
				initialValues = { initialTask }
				validationSchema={ taskSchema }

				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
					localStorage.setItem('credentials', values)
				}}
			>

			{({ values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur}) => (
						<Form>
							<label htmlFor='name'>Name</label>
							<Field id='name' name='name' placeholder='Name of the task'></Field>
							{ 
								errors.name && touched.name && 
								(
									<div className='error'>
										<ErrorMessage name='name' />
									</div>
								)
							}
							<label htmlFor='description'>Description</label>
							<Field id='description' name='description' placeholder='Insert a description'></Field>
							{
								errors.description && touched.description && 
								( 
									<div className='error'>
										<ErrorMessage name='description' />
									</div>
								)
								
							}
							<label htmlFor='level'>level</label>
							<Field id='level' name='level' placeholder='Insert a level' type='select'></Field>
							{
								errors.level && touched.level && 
								( 
									<div className='error'>
										<ErrorMessage name='level' />
									</div>
								)
							}
							<button type='submit'>Add task</button>
						</Form>
				)}
				
			</Formik>
		</div>
	);
}

export default TaskFormik;

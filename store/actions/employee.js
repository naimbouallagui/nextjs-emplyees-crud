import * as t from "../types";


export const fetchEmployees = () => {
	return (dispatch) => {
		dispatch({
				type: t.EMPLOYEE_FETCH_REQUESTED,
		})
		return fetch("/api/employees")
			.then((r) => r.json())
			.then((employeeList) => {
				dispatch({
					type: t.EMPLOYEE_FETCH_SUCCEEDED,
					payload: employeeList.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: t.EMPLOYEE_FETCH_FAILED,
					payload: error.message,
				});
			});
	};
};


export const addEmployee = (employee) => {
	return (dispatch) => {
		return fetch("/api/employees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(employee),
		})
			.then((r) => r.json())
			.then((newEmployee) => {
				dispatch({
					type: t.EMPLOYEE_ADD_SUCCEEDED,
					payload: newEmployee.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: t.EMPLOYEE_ADD_FAILED,
					payload: error.message,
				});
			});
	};
};



export const deleteEmployee = (id) => {
	return (dispatch) => {
		return fetch("/api/employees/" + id, {
			method: "DELETE",
		})
			.then((r) => r.json())
			.then((deletedEmployee) => {
				dispatch({
					type: t.EMPLOYEE_DELETE_SUCCEEDED,
					payload: deletedEmployee.data.id,
				});
			})
			.catch((error) => {
				dispatch({
					type: t.EMPLOYEE_DELETE_FAILED,
					payload: error.message,
				});
			});
	};
};



export const updateEmployee = (employee) => {
	return (dispatch) => {
		return fetch("/api/employees/" + employee._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(employee),
		})
			.then((r) => r.json())
			.then((updatedEmployee) => {
				dispatch({
					type: t.EMPLOYEE_UPDATE_SUCCEEDED,
					payload: updatedEmployee.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: t.EMPLOYEE_UPDATE_FAILED,
					payload: error.message,
				});
			});
	};
};


export const setModalOpen = (isModalOpen) => {
	return {
		type: t.MODAL_OPEN,
		payload: isModalOpen,
	};
};

export const setSelectedEmployee = (id) => {
	return {
		type: t.EMPLOYEE_SELECTED,
		payload: id,
	};
};

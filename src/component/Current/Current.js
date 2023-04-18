import DataTable from "react-data-table-component"
import {useState, useMemo} from "react"
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../redux/selector';
import "./Current.css"

const columns = [
    {
        name: 'First Name',
        selector: row => row.first,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Last Name',
        selector: row => row.last,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Start Date',
        selector: row => row.start,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
        filterable: true,
		reorder: true,

    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
        filterable: true,
		reorder: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.code,
        sortable: true,
        filterable: true,
		reorder: true,
    },
];


const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<input
			id="search"
			type="text"
			placeholder="Search"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button type="button" onClick={onClear}>
			X
		</button>
	</>
);
function MyComponent() {
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const employees = useSelector(selectEmployees).dataEmployee
    console.log(employees)

	const filteredItems = employees.filter(data =>
        (data.first.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.last.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.start.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.department.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.birth.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.street.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.city.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.state.toLowerCase()).includes(filterText.toLowerCase()) ||
        (data.code.toLowerCase()).includes(filterText.toLowerCase())
	);
        
	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    
	return (
		<DataTable
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} 
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
		/>
        
	);
}

export default MyComponent

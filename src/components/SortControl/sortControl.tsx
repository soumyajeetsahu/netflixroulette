import React, { useState } from 'react'
import styles from './sortControl.module.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, TextField, colors } from '@mui/material';

interface SortBy {
    id: number;
    displayName: string;
    value: string;
}

export interface SortControlProps {
    sortByList: SortBy[];
    onSortByChange: (value: string) => void;
}

const sxStyle = {
    '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
    '& .MuiInputBase-input': { color: 'white', fontFamily: 'Montserrat' },
    '& .MuiSvgIcon-root': { color: '#F65261' }
}

const SortControl: React.FC<SortControlProps> = (props) => {
    const [selectedSortBy, setSelectedSortBy] = useState<string>("");

    const handleChange = (value: string) => {
        setSelectedSortBy(value)
        props.onSortByChange(value);
    };

    return (
        <div className={styles.sortControl}>
            <span className={`${styles.sortByText}`}>SORT BY</span>
            <Select sx={sxStyle}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            "& .MuiMenuItem-root.MuiMenuItem-root": { minHeight: 30 },
                            "& .MuiMenuItem-root:hover": { backgroundColor: "#F65261" },
                            "& .MuiMenuItem-root.Mui-selected:hover": { backgroundColor: "#F65261" }
                        }
                    }
                }}
                value={selectedSortBy}
                onChange={(event) => handleChange(event.target.value)} autoWidth={true}
            >
                <MenuItem value=""></MenuItem>
                {props.sortByList.map((sortBy: SortBy) => (
                    <MenuItem value={sortBy.value} key={sortBy.id}>
                        {sortBy.displayName}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default SortControl
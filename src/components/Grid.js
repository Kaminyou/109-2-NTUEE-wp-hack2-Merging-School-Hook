export default function Grid () {
    
    let grid_id = `grid-0-0`;
    let value_id = `value-0-0`;
    let temp_class_name = 'grid';

    // #########################
    // # 1 #2 Modify everything here (including the above one) yourself
    // #########################

    return (
        <td>
            <div className={temp_class_name} id={grid_id}>
                <div className="school-name" id={value_id}>0</div>
            </div>
        </td>
    );
}
import Button from "../../SharedComponents/Button";

const TodoForm = () => {
    return(
        <div className="flex items-center gap-4">
            <input type="text" name="text" className="w-80 px-2 py-1 rounded-sm bg-stone-200"/>
            <Button className="text-orange-800 hover:text-stone-950">Tạo mới</Button>
        </div>
    );
}

export default TodoForm;
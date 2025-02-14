import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Slider } from "../components/Slider";
import { Title } from "../components/Title";

function App() {
    return (
        <main className="max-w-[426px] m-auto">
            <Title text="Personal Info" />
            <Form>
                <Input text="First Name" />
                <Input text="Last Name" />
                <Input text="Email Address" />

                <Slider />
                <Button text="Send Application" isFormValid={true} />
            </Form>
        </main>
    );
}

export default App;

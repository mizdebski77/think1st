import { Button } from "../components/Button";
import { FileInput } from "../components/FileInput";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Slider } from "../components/Slider";
import { Title } from "../components/Title";

function App() {
    return (
        <main className="max-w-[426px] m-auto">
            <Title as="h1" text="Personal Info" />
            <Form>
                <Input text="First Name" />
                <Input text="Last Name" />
                <Input text="Email Address" />
                <FileInput />
                <Slider />
                <Title as="h2" text="Personal Info" />

                <Button text="Send Application" isFormValid={true} />
            </Form>
        </main>
    );
}

export default App;

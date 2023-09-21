
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const Mode = () => {
    return (
        <Switch
            defaultSelected
            size="sm"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >
        </Switch>
    );
}

export default Mode

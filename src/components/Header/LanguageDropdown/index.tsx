import {Select} from 'antd';
import {useTranslation} from 'react-i18next';

const LanguageDropdown = () => {

    const {i18n} = useTranslation()
    const toggleLanguage = async (value: string) => {
        await i18n.changeLanguage(value)
    }

    return (
        <Select
            defaultValue={i18n.language}
            style={{width: 120}}
            onChange={toggleLanguage}
            options={[
                {value: 'ru', label: 'RU'},
                {value: 'en', label: 'EN'},
            ]}

        />
    );
};

export default LanguageDropdown;

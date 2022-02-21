import React, { useState } from 'react';
import {
	Box,
	Flex,
	Text,
	Button,
	Heading,
} from 'rebass/styled-components';
import { Label, Input, Textarea } from '@rebass/forms';
const labelStyle = {
	color: 'primary',
	fontSize: '25px',
	marginBottom: '10px',
	fontFamily: 'Lato',
};

const inputStyle = {
	color: 'primary',
	fontSize: '20px',
	fontFamily: 'Lato',
	border: '1px #ddd solid',
	resize: 'none',
	fontWeight: 300,
};

function getSubmitButtonProps(isSending, messageSent) {
	if (messageSent) {
		return { text: 'Wysłano', color: 'success' };
	}
	if (isSending) {
		return { text: 'Wysyłam...', color: 'primary' };
	}
	return { text: 'Wyślij', color: 'primary' };
}
const ContactPage = () => {
	const [isSending, setIsSending] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const { content, email } = e.target;
		if (!content.value || !email.value) {
			alert('Pola "email" i "treść maila" nie mogą być puste');
			return;
		}
		setIsSending(true);
		console.log({ email: email.value, content: content.value });
		setMessageSent(true);
	};

	const buttonProps = getSubmitButtonProps(isSending, messageSent);
	return (
		<Box variant={'wrapper'} as={'form'} onSubmit={onSubmit}>
			<Flex
				width={[1, 1, 1]}
				flexDirection={'column'}
				alignItems={'center'}
			>
				<Heading
					fontFamily={'Lato'}
					fontSize={36}
					color={'text'}
					textAlign={'center'}
				>
					Masz pytania? Skontaktuj sie z nami! <br />
					Formularz kontaktowy
				</Heading>
				<Box marginTop={20} width={1 / 2}>
					<Label htmlFor='email' sx={labelStyle}>
						Podaj swój e-mail
					</Label>
					<Input
						disabled={isSending || messageSent}
						type={'email'}
						id='email'
						name='email'
						placeholder='jan.kowalski@poczta.pl'
						sx={inputStyle}
					/>
				</Box>
				<Box marginTop={20} width={1 / 2}>
					<Label htmlFor='content' sx={labelStyle}>
						Treść maila
					</Label>
					<Textarea
						sx={inputStyle}
						id='content'
						name='content'
						height={200}
						placeholder='Treść wiadomości'
						disabled={isSending || messageSent}
					/>
				</Box>
				<Button
					width={1 / 5}
					alignSelf={'center'}
					backgroundColor={buttonProps.color}
					marginTop={20}
					type={'submit'}
					disabled={isSending || messageSent}
				>
					<Text fontSize={20} color={'muted'}>
						{buttonProps.text}
					</Text>
				</Button>
			</Flex>
		</Box>
	);
};

export default ContactPage;

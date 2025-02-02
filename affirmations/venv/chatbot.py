from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

template = """
Answer the question below.

Here is the conversation history: {context}

Question: {question}

Answer:
"""

model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)

chain = prompt | model

def handle_conversation():
    context = ""
    print("Welcome to Vinyasa, Joesphine! How can I help you? Type 'exit' to quit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break

        result = chain.invoke({"context": context, "question": user_input})
        print("Bot: ", result)
        context == f"\nUser: {user_input}\nAI: {result}"

if __name__ == "__main__":
    handle_conversation()      


'''
OLD BOT USING OPENAI
import time
from openai import OpenAI

client = OpenAI(
    api_key = "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"
)

completion = client.chat.completions.create(
  model = "davinci-002",
  messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"},
  ],
  temperature = 0.7,
  max_tokens = 50
)

print(completion.choices[0].message.content.strip())
time.sleep(1.5)


API_KEY = open("API_KEY", "r").read()
openai.api_key = API_KEY

def chat_with_gpt(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]

    )

    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break

        response = chat_with_gpt(user_input)
        print("Chatbot: ", response)
'''





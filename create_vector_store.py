"""
This script builds the FAISS vector store from the markdown documents
in 'api/data' and saves it to a local folder 'api/faiss_index'.

This is run ONCE locally to pre-build the index and avoid OOM errors
on Vercel.
"""
import os
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain_community.vectorstores import FAISS

# Define the paths
DATA_PATH = "api/data"
DB_PATH = "api/faiss_index"

def build_and_save_index():
    print(f"Loading documents from: {DATA_PATH}...")
    loader = DirectoryLoader(
        DATA_PATH,
        glob="**/*.md",
        loader_cls=UnstructuredMarkdownLoader,
        show_progress=True
    )
    documents = loader.load()
    
    print("Splitting documents into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    split_docs = text_splitter.split_documents(documents)
    
    print("Initializing embeddings model (BAAI/bge-small-en-v1.5)...")
    embeddings = HuggingFaceBgeEmbeddings(
        model_name="BAAI/bge-small-en-v1.5",
        model_kwargs={'device': 'cpu'},
        encode_kwargs={'normalize_embeddings': True}
    )
    
    print("Building FAISS vector store from documents...")
    vector_store = FAISS.from_documents(split_docs, embeddings)
    
    print(f"Saving index to: {DB_PATH}...")
    vector_store.save_local(DB_PATH)
    
    print("\nDone! Vector store created and saved successfully.")
    print(f"Make sure to commit the new '{DB_PATH}' folder to Git.")

if __name__ == "__main__":
    build_and_save_index()

declare global {
  type WorkspaceMeta = {
    framework: string
    platform: string
    runtime: string
    shell: string
  }

  interface Window {
    desktop: {
      workspaceMeta: () => Promise<WorkspaceMeta>
    }
  }
}

export {}
